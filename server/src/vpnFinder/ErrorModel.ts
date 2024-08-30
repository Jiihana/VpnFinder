export type ResultatValue<T> = ResultatSuccessValue<T> | ResultatFailure;

export type ResultatSuccessValue<T> = {
    value: T;
} & ResultatSuccess;

export type Resultat = ResultatSuccess | ResultatFailure;

export type ResultatSuccess = {
    success: true;
};

export type ResultatFailure = {
    success: false;
    message: string;
};
