import { ChangeEvent, FormEvent, MouseEvent } from 'react';

export type ChangeHandlerType = (e: ChangeEvent<HTMLInputElement>, value?: any) => void;
export type ClickHandlerType = (e: MouseEvent<HTMLButtonElement>, value?: any) => void;
export type SubmitHandlerType = (e: FormEvent, value?: any) => void;
