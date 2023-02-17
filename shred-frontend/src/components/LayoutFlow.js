import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge, ConnectionLineType, useNodesState, useEdgesState,
  updateEdge, Controls, useReactFlow,
} from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';

import { initialNodes, initialEdges } from '../nodes-edges.js';

import '../index.css';
import { getNodesEdges, updateNodesEdges } from '../trickService.js';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;
const proOptions = { hideAttribution: true };

const getLayoutedElements = (nodes, edges) => {
  dagreGraph.setGraph({ rankdir: 'TB' });
  dagreGraph.setGraph({ nodesep: 10, ranksep: 100 });


  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = 'top';
    node.sourcePosition = 'bottom';

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const getNodeId = () => `randomnode_${+new Date()}`;

const LayoutFlow = () => {
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { getNodes, setViewport } = useReactFlow();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");
  const [prog, setProg] = useState(false);
  const notesValue = useRef("");
  const nodeId = useRef(null);
  const checkValue = useRef(false);
  const progValue = useRef(false);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.Straight }, eds)
      ),
    []);

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      updateNodesEdges(flow);
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const response = await getNodesEdges();
      const flow = response.data;
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      } else {
        onReset();
      }
    };
    restoreFlow();
  }, [setNodes, setViewport]);

  const onReset = useCallback(() => {
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [setNodes, setViewport]);

  // const onAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     data: { label: 'Added node' },
  //     targetPosition: 'top',
  //     sourcePosition: 'bottom',
  //     position: {
  //       x: Math.random() * window.innerWidth - 100,
  //       y: Math.random() * window.innerHeight,
  //     },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const onNodeClick = useCallback((_, node) => {
    setChecked(node.data.isChecked);
    checkValue.current = node.data.isChecked;
    nodeId.current = node.id;
    setNotes(node.data.notes)
    notesValue.current = node.data.notes;
    setTitle(node.data.label);
    setProg(node.data.inProgress);
    progValue.current = node.data.inProgress;
    setOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    setOpen(false);
    setNodes(getNodes().map((node) => {
      if (node.id === nodeId.current) {
        node.data = {
          ...node.data,
          isChecked: checkValue.current,
          inProgress: progValue.current,
          notes: notesValue.current
        };
      }
      return node;
    }));
  }, [setNodes]);

  const onInit = useCallback((reactFlowInstance) => {
    const restoreFlow = async () => {
      const response = await getNodesEdges();
      const flow = response.data;
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        reactFlowInstance.setNodes(flow.nodes || []);
        reactFlowInstance.setEdges(flow.edges || []);
        reactFlowInstance.setViewport({ x, y, zoom });
      }
    };
    restoreFlow();
    setRfInstance(reactFlowInstance);
  }, [setNodes, setViewport]);

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onConnect={onConnect}
        onInit={onInit}
        onNodeClick={onNodeClick}
        proOptions={proOptions}
        connectionLineType={ConnectionLineType.Straight}
        fitView
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add notes or mark the trick as complete
          </DialogContentText>
          <TextField
            sx={{ mt: 2 }}
            id="trick-notes"
            label="Notes"
            defaultValue={notes}
            multiline
            rows={3}
            fullWidth
            margin="dense"
            onChange={(evt) => {
              notesValue.current = evt.target.value;
            }}
          />
          <FormGroup>
            <FormControlLabel
              sx={{ mt: 1 }}
              label="In progress"
              control={
                <Switch checked={prog} onChange={() => {
                  if (!prog) {
                    if (checked) {
                      setChecked(false);
                      checkValue.current = false;
                    }
                    setProg(true);
                    progValue.current = true;
                  } else {
                    setProg(false);
                    progValue.current = false;
                  }
                }} />
              }
            />
            <FormControlLabel
              sx={{ mt: 1 }}
              label="Trick completed"
              control={
                <Switch checked={checked} onChange={() => {
                  setChecked(!checked);
                  checkValue.current = !checked;
                  if (prog) {
                    setProg(false);
                    progValue.current = false;
                  }
                }} />
              }
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
      <div className="save__controls">
        <button onClick={onSave}>save changes</button>
        <button onClick={onRestore}>restore</button>
        <button onClick={onReset}>reset</button>
        {/*<button onClick={onAdd}>add trick</button>*/}
      </div>
    </div>
  );
};

export default LayoutFlow;
