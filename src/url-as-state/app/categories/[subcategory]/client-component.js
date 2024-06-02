'use client';

import { useParams, useSearchParams } from "next/navigation";

// When working on a client component (i.e. a component with a "use client" directive at the top of the file), 
// you can use the useSearchParams hook to get the query string parameters from the URL.
// You can also use the useParams hook to get the route parameters from the URL.

export default function Details() {
    const params = useParams();
    const searchParams= useSearchParams();
    const { subcategory } = params;
    const state = searchParams.get('state');
    return (
        <div>
            <h2>Subcategory: {subcategory}</h2>
            {state && <h3>State: {state}</h3>}
        </div>
    );
}