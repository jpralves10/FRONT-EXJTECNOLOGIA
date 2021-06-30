
export interface Profile {
    id?: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    enabled?: boolean;
    emailVerified?: boolean;
    totp?: boolean;
    createdTimestamp?: number;
    attributes?: object;
    roles?: string[];
    credentials?: Credentials[]
}

export interface Credentials {
    type: string,
    value: string,
    temporary: boolean
}