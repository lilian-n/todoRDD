import { TextUtil } from "../../shared/utils/TextUtil.ts";
import { Result } from "../../shared/logic/Result.ts";

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

  public getContent() {
    return this.props.content;
  }

  public isCompleted() {
    return this.props.isCompleted;
  }

  public static create(content: string) {
    const isValidLength =
      TextUtil.isAtLeast(5, content) && TextUtil.isAtMost(30, content);

    if (!isValidLength) {
      return Result.fail<Todo>("Must be between 5 to 30 characters");
    }

    const args = {
      content: content,
    };

    return Result.ok<Todo>(new Todo(args));
  }
}
