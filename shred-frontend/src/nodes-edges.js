const position = { x: 0, y: 0 };
const edgeType = 'default';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Ollie' },
    position,
  },
  {
    id: '2',
    data: { label: 'Nollie' },
    position
  },
  {
    id: '3',
    data: { label: 'Straight Air (XS)' },
    position
  },
  {
    id: '4',
    data: { label: 'Straight Air (S)' },
    position
  },
  {
    id: '5a',
    data: { label: 'Indy' },
    position
  },
  {
    id: '5b',
    data: { label: 'Melon' },
    position
  },
  {
    id: '5c',
    data: { label: 'Mute' },
    position
  },
  {
    id: '5d',
    data: { label: 'Stalefish' },
    position
  },
  {
    id: '6',
    data: { label: 'Shifty' },
    position
  },
  {
    id: '7',
    data: { label: 'Frontside 180' },
    position
  },
  {
    id: '8',
    data: { label: 'Straight Air (M)' },
    position
  },
  {
    id: '9',
    data: { label: 'Straight Air (L)' },
    position
  },
  {
    id: '10',
    data: { label: 'Frontside 360' },
    position
  },
  {
    id: '11',
    type: 'input',
    data: { label: '50-50' },
    position
  },
  {
    id: '12',
    data: { label: 'Nose Grab' },
    position
  },
  {
    id: '13',
    data: { label: 'Tail Grab' },
    position
  },
  {
    id: '14',
    data: { label: 'Boardslide' },
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
];
