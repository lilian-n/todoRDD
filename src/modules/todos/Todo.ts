type TodoProps = {
  id?: string;
  content: string;
  isCompleted?: boolean;
};

export class Todo {
  private props: TodoProps;

  private constructor(props: TodoProps) {
    const uuid = crypto.randomUUID();

    this.props = props;
    this.props.id = uuid;
    this.props.isCompleted = props.isCompleted ? props.isCompleted : false;
  }

  public static create(content: string) {}

  public getContent() {
    return this.props.content;
  }

  public isCompleted() {
    return this.props.isCompleted;
  }
}
