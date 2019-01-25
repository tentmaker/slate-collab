import { Value } from 'slate';
import { init } from 'automerge';

import Envelope from './envelope';

const value = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'line',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                object: 'leaf',
                text: 'foobar',
              },
            ],
          },
        ],
      },
    ],
  },
});

it('should initialize with a slate value', () => {
  const envelope = new Envelope(value);
  expect(envelope.value().document.text).toBe('foobar');
});

it('should initialize with a serialized automerge document', () => {
  const serialized = new Envelope(value).serialize();
  const envelope = new Envelope(serialized);
  expect(envelope.value().document.text).toBe('foobar');
});

it('should throw an error if no initializer is provided', () => {
  expect(() => {
    const envelope = new Envelope();
  }).toThrowErrorMatchingSnapshot();
});
