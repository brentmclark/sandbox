import ClientComponent from "./client-component";

// When working with a server component, you can grab the params and searchParams off the props passed to the component by NextJS.

export default function Page(props) {
    const {params, searchParams} = props;
    return (
        <>
            <h1>Subcategory page</h1>
            <br />
            <br />
            <p>Using props (server component)</p>
            <hr />
            <h2>Subcategory: {params.subcategory}</h2>
            {searchParams?.state && <h3>State: {searchParams.state}</h3>}
            <br />
            <br />
            <br />
            <p>Using hooks (client component)</p>
            <hr />
            <ClientComponent />
        </>
    )
}