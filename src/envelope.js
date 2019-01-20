/*
  constructor(props) {
    super(props);

    this.envelope = new Envelope({ value: initialValue });
  }

  componentDidMount() {
    incoming.on('message', (envelope) => {
      this.envelope = this.envelope.merge(envelope);
      this.setState({ value: this.envelope.value() });
    });
  }

  onChange({ value, operations }) {
    this.envelope = this.envelope.apply(operations);
    outgoing.emit('message', this.envelope.toJSON());
    this.setState({ value: this.envelope.value() });
  }
*/

class Envelope {
  apply() {
  }

  merge() {
  }

  toJSON() {
  }

  value() {
  }

  undo() {
  }

  redo() {
  }
}

export default Envelope;
