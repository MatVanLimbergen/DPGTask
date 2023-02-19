import { test as base } from '@playwright/test'

export type TestOptions = {
    email: string;
    password: string;
    username: string;
};

export const test = base.extend<TestOptions>({
    email: ['', {option: true}],
    password: ['', {option: true}],
    username: ['', {option: true}]
})