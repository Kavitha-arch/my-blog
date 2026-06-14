// 1. Move styles outside the component to avoid recreating them on every render
const referenceStyles = {
    wrapper: "mx-auto my-8 max-w-2xl rounded-xl border border-gray-800 bg-gray-800/50 p-6 dark:border-gray-800 dark:bg-yellow-400/50 shadow-sm",
    header: "mb-4 text-xs font-bold uppercase tracking-widest text-red-400 dark:text-gray-500",
    listContainer: "space-y-3 text-sm leading-relaxed text-gray-800 dark:text-red-800",
    anchor: "font-medium text-indigo-600 hover:text-blue-500 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300"
};

// 2. Export the component cleanly
export function SourcesBlock() {
    return (
        <div className={referenceStyles.wrapper}>
            <h4 className={referenceStyles.header}>
                Sources & References
            </h4>

            <div className={referenceStyles.listContainer}>
                <p>
                    1. Devi Mahatmya:{" "}
                    <a
                        href="https://devimahatmya.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={referenceStyles.anchor}
                    >
                        devimahatmya.com
                    </a>
                </p>

                <p>
                    2. Amar Chitra Katha:{" "}
                    <a
                        href="https://amarchitrakatha.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={referenceStyles.anchor}
                    >
                        amarchitrakatha.com
                    </a>
                </p>

                <p>
                    3. Siddhapedia:{" "}
                    <a
                        href="https://siddhapedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={referenceStyles.anchor}
                    >
                        Chamunda Devi
                    </a>{" "}
                    — siddhapedia.com
                </p>
            </div>
        </div>
    );
}
