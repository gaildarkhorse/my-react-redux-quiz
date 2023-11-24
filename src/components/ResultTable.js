import React from 'react';
import ReactDOMServer from 'react-dom/server';
import FixedComponent from './FixedCom';
import { connect } from 'react-redux';
import HomepageToPDF from './DownloadToPDF';

const total_quiz_count = 5;
const heading1 = ['SELF-PRESERVATION', 'SEXUAL', 'ADAPTATION/SOCIAL'];
const heading2 = ['SP health', 'SP res', 'SP home', 'SX magn', 'SX exp', 'SX merg', 'SO read', 'SO bond', 'SO part'];

const ColoredTable = ({ riskState, quizState, countState }) => {
    
    const resultData = Array.from({ length: 9 }, () => 0);
    const getResult = () => {
        for (let i = 0; i < quizState.length; i++) {
            if (quizState[i] < 10) {
                resultData[quizState[i] - 1] += 1;
            }
        }
    }

    const rows = 17;
    const columns = 9;
    const cellheight = 40; // Size in pixels
    const cellwidth = 120;
    const borderColor = 'black';

    const firstGroupColor = '#CCCC00';
    const secondGroupColor = '#00CCCC';
    const thirdGroupColor = '#CC00CC';

    const colorSet = [firstGroupColor, secondGroupColor, thirdGroupColor];

    const genCellColor = (row, col) => {
        if (row >= rows - resultData[col]) {
            return colorSet[Math.floor(col / 3)];
        } else {
            return '#FFFFFF';
        }
    };

    const renderTable = () => {
        const table = [];
        const heading = [];
        getResult();
        for (let j = 0; j < heading1.length; j++) {
            const headerStyle = {
                backgroundColor: colorSet[j],
                border: `1px solid ${borderColor}`,
            };
            heading.push(
                <th key={j} colspan="3" style={headerStyle}>
                    {heading1[j]}
                </th>
            );
        }
        table.push(<tr key={0}>{heading}</tr>);
        console.log(heading);

        for (let i = 1; i < rows; i++) {
            const row = [];

            for (let j = 0; j < columns; j++) {
                const cellStyle = {
                    backgroundColor: genCellColor(i, j),
                    width: cellwidth,
                    height: cellheight,
                    border: `1px solid ${borderColor}`,
                };

                row.push(
                    <td key={j} style={cellStyle}>
                        {/* Empty cell */}
                    </td>
                );
            }

            table.push(<tr key={i}>{row}</tr>);
        }

        // Add text to the first row
        table[1] = (
            <tr key={1}>
                {table[1].props.children.map((cell, index) => (
                    <td key={index} style={cell.props.style}>
                        {heading2[index]}
                    </td>
                ))}
            </tr>
        );


        return table;
    };
    
    const handleNewClick = () => {
        const newWindow = window.open('', '_blank');
        const tableHtml = ReactDOMServer.renderToString(
            <table>
                <tbody>{renderTable()}</tbody>
            </table>
        );
           
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                <title>Colored Table</title>
                <style>
                    table {
                    border-collapse: collapse;
                    }
                    td {
                    text-align: center;
                    }
                </style>
                </head>
                <body>
                <h1>
                    <Center>Personal Instinct</Center>
                </h1>  
                <center>${tableHtml}</center>
                <button onclick="callFunctionAndClose()">Click Me</button>
                <script>
                    function callFunctionAndClose() {
                        alert("hello");
                        // Call the function from the parent window
                        //window.opener.handleButtonClick();
                        // Close the current window
                        window.close();
                    }
                </script>
                </body>
            </html>
            `);


        newWindow.document.close();
    };
    const tableHtml = ReactDOMServer.renderToString(
        <table>
            <tbody>{renderTable()}</tbody>
        </table>
    );
    return (
        <div>
            {
                <HomepageToPDF content={tableHtml}/>
            }
            {
                (countState === total_quiz_count) &&
                <FixedComponent callbackResultView={handleNewClick} />
            }
        </div>
    );

};

const mapStateToProps = (state) => ({
    riskState: state.riskState,
    countState: state.countState,
    quizState: state.quizState
});

export default connect(mapStateToProps)(ColoredTable);
