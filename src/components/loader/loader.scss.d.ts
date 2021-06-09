declare namespace LoaderScssNamespace {
    export interface ILoaderScss {
        load: string;
        loader: string;
    }
}

declare const LoaderScssModule: LoaderScssNamespace.ILoaderScss;

export = LoaderScssModule;
