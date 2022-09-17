export interface FormProps<T, K> {
    children: any;
    onSubmit: (data: FormDataType<T>) => Promise<K> | K;
}

export type FormDataType<R> = any;
