export class TextUtil {
  public static isAtLeast(strLength: number, str: string) {
    return str.length >= strLength;
  }

  public static isAtMost(strLength: number, str: string) {
    return str.length <= strLength;
  }
}
