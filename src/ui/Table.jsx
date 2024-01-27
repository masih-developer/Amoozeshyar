const Table = ({ children }) => {
  return (
    <div className="app-table">
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader = ({ children }) => {
  return <thead>{children}</thead>;
};

const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
