'use client';
// this client only function's only purpose to prevent error while rendering(hydration Error)
// need to wrap nabvar with this client only component
import {useEffect,useState} from 'react';

// let's write interface for this function 
interface ClientOnlyProps{
    children: React.ReactNode;
}


const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    
    const [hasMounted, setHasMounted] = useState(false);


    useEffect(() => {
        setHasMounted(true)
    }, [])
    
    if (!hasMounted) {
        return null;
    }

    return (
        <>
          {children}  
        </>
    );
};

export default ClientOnly;