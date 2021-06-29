export interface Token {
    "exp": number
    "iat": number
    "auth_time": number
    "jti": string
    "iss": string
    "aud": string[] | string
    "sub": string
    "typ": string
    "azp": string
    "nonce": string
    "session_state": string
    "acr": string
    "allowed-origins": string[]
    "realm_access": RealmAccess
    "resource_access": ResourceAccess
    "scope": string
    "email_verified": boolean
    "name": string
    "preferred_username": string,
    "given_name": string,
    "family_name": string,
    "email": string,
    "dataTokenInMilis": number
}

interface RealmAccess {
    "roles": string[]
}

interface ResourceAccess {
    "realm-management": RealmManagement
    "account": RealmManagement
}

interface RealmManagement {
    "roles": string[]
}