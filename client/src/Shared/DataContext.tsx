import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// Définir le type du contexte
type DataContextType = {
    type: string;
    setType: (type: string) => void;
    includeAdult: boolean;
    setIncludeAdult: (include: boolean) => void;
};

// Créer le contexte avec un type par défaut
const DataContextDefault = createContext<DataContextType>({
    type: '',
    setType: () => {},
    includeAdult: false,
    setIncludeAdult: () => {}
});

// Créer un provider
const DataProvider = ({ children }: { children: ReactNode }) => {
    const [type, setType] = useState<string>('');
    const [includeAdult, setIncludeAdult] = useState<boolean>(false);

    useEffect(() => {
        console.log(includeAdult);
    }, [includeAdult]);

    return (
        <DataContextDefault.Provider
            value={{
                type: type,
                setType: setType,
                includeAdult,
                setIncludeAdult
            }}
        >
            {children}
        </DataContextDefault.Provider>
    );
};

export { DataContextDefault as DataContext, DataProvider };
