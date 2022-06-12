


export default function Layout({ children }: any) {
    return (
        <div className="container mx-auto px-10 py-5 max-w-4xl">
            <div className="prose">
                {children}
            </div>
        </div>

    );
}

