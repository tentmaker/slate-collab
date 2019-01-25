/** @jsx h */

import { Value } from 'slate';
import h from './h';

import { Envelope } from './main';

const value = (
  <value>
    <document>
      <line>foobar</line>
    </document>
  </value>
);

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
