declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_URL?: string;

    readonly KEYSTATIC_GITHUB_CLIENT_ID?: string;
    readonly KEYSTATIC_GITHUB_CLIENT_SECRET?: string;
    readonly KEYSTATIC_SECRET?: string;
    readonly REDIRECT_EDGE_CONFIG?: string;

    readonly NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG?: string;
  }
}

declare type Maybe<T> = T | undefined;
declare type OmitChildren<T> = Omit<T, "children">;
declare type Prettify<T> = { [P in keyof T]: T[P] };
