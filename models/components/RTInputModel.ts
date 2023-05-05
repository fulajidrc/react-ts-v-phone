export interface RTInputModel {
    className?: string;
    label?:string;
    type?: "text" | "password" | "email" | "date" | 'datetime' | "number";
    placeholder?: string;
}