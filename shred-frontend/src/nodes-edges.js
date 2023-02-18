const position = { x: 0, y: 0 };
const edgeType = 'straight';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Ollie', isChecked: false, inProgress: false, notes: "" },
    position,
  },
  {
    id: '2',
    data: { label: 'Nollie', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '3',
    data: { label: 'Straight Air (XS)', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '4',
    data: { label: 'Straight Air (S)', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '5a',
    data: { label: 'Indy', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '5b',
    data: { label: 'Melon', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '5c',
    data: { label: 'Mute', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '5d',
    data: { label: 'Stalefish', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '6',
    data: { label: 'Shifty', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '7',
    data: { label: '180', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '8',
    data: { label: 'Straight Air (M)', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '9',
    data: { label: 'Straight Air (L)', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '10',
    data: { label: '360', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '11',
    type: 'input',
    data: { label: '50-50', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '12',
    data: { label: 'Nose Grab', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '13',
    data: { label: 'Tail Grab', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '14',
    data: { label: 'Board Slide', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '15',
    data: { label: 'Nose Slide', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '16',
    data: { label: 'Tail Slide', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '17',
    data: { label: 'Pretzel', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '18',
    data: { label: '540', isChecked: false, inProgress: false, notes: "" },
    position
  },
  {
    id: '19',
    data: { label: '720', isChecked: false, inProgress: false, notes: "" },
    position
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: edgeType },
  { id: 'e1-3', source: '1', target: '3', type: edgeType },
  { id: 'e3-4', source: '3', target: '4', type: edgeType },
  { id: 'e4-5a', source: '4', target: '5a', type: edgeType },
  { id: 'e4-5b', source: '4', target: '5b', type: edgeType },
  { id: 'e4-5c', source: '4', target: '5c', type: edgeType },
  { id: 'e4-5d', source: '4', target: '5d', type: edgeType },
  { id: 'e4-6', source: '4', target: '6', type: edgeType },
  { id: 'e4-7', source: '4', target: '7', type: edgeType },
  { id: 'e4-8', source: '4', target: '8', type: edgeType },
  { id: 'e8-9', source: '8', target: '9', type: edgeType },
  { id: 'e8-10', source: '8', target: '10', type: edgeType },
  { id: 'e5a-12', source: '5a', target: '12', type: edgeType },
  { id: 'e5a-13', source: '5a', target: '13', type: edgeType },
  { id: 'e5b-12', source: '5b', target: '12', type: edgeType },
  { id: 'e5b-13', source: '5b', target: '13', type: edgeType },
  { id: 'e5c-12', source: '5c', target: '12', type: edgeType },
  { id: 'e5c-13', source: '5c', target: '13', type: edgeType },
  { id: 'e5d-12', source: '5d', target: '12', type: edgeType },
  { id: 'e5d-13', source: '5d', target: '13', type: edgeType },
  { id: 'e11-14', source: '11', target: '14', type: edgeType },
  { id: 'e14-15', source: '14', target: '15', type: edgeType },
  { id: 'e14-16', source: '14', target: '16', type: edgeType },
  { id: 'e15-17', source: '15', target: '17', type: edgeType },
  { id: 'e16-17', source: '16', target: '17', type: edgeType },
  { id: 'e7-10', source: '7', target: '10', type: edgeType },
  { id: 'e10-18', source: '10', target: '18', type: edgeType },
  { id: 'e9-19', source: '9', target: '19', type: edgeType },
  { id: 'e18-19', source: '18', target: '19', type: edgeType },
];
