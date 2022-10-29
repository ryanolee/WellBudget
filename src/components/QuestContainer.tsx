
export type QuestProps = { name: string, children: React.ReactNode };

export const QuestContainer = ({name, children}: QuestProps) => {
    return (
      <div id={name + `-quest`} className="quest-container">
        {children}
      </div>
    );
}