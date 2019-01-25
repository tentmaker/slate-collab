import { Value } from 'slate';
import { init, load, change, save } from 'automerge';

class Envelope {
  constructor(initializer) {
    if (typeof initializer === 'string') {
      this._doc = load(initializer);
      const { document } = this._doc;
      this._value = Value.fromJSON({ document });
    } else if (initializer instanceof Value) {
      this._doc = change(init(), 'initialize', doc => {
        doc.document = initializer.document.toJSON();
      });
      this._value = initializer;
    } else {
      throw new Error("An Envelope must be initialized with either a serialized Envelope string or a Slate Value.");
    }
  }

  apply() {
  }

  merge() {
  }

  serialize() {
    return save(this._doc);
  }

  value() {
    return this._value;
  }

  undo() {
  }

  redo() {
  }
}

export default Envelope;
