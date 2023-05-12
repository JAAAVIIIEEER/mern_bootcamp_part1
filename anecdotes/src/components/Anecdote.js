export const Anecdote = ({header, anecdote}) => {
    return (
        <div>
            <h1>{header}</h1>
            <p>
                {anecdote}
            </p>
        </div>
    )
}