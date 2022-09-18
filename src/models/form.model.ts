export interface FormProps<T, K> {
    children: any;
    data?:Partial<T>|null,
    onSubmit: (data: FormDataType<T>) => Promise<K> | K;
}

export type FormDataType<R> = any;
