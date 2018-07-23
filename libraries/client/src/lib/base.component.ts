export abstract class BaseComponent<T> {
    public value: T;

    protected constructor(v: T) {
        this.value = v;
    }
}
