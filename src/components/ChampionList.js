import React, { useState, useCallback, useEffect } from 'react';
import ChampionElement from './ChampionElement';
import ChampionGrapList from './Graphs/ChampionGrapList';

const ChampionList = ({ chamipons, championName, onClick}) => {
    const [championList, setChampionList] = useState([]);

    // useEffect(() => {
    //     let rows = [];
    //     let cols = [];
    //     if (championName === '') {
    //         for (let i = 0; i < chamipons.length; i++) {
    //             cols.push(
    //                 <td
    //                     key={chamipons[i].championId}
    //                     id={chamipons[i].championId}>
    //                     <ChampionElement
    //                         imageUrl={chamipons[i].imageLink}
    //                         name={chamipons[i].championName}
    //                         id={chamipons[i].championId}
    //                         onClick={onClick}
    //                     />
    //                 </td>,
    //             );
    //             if (cols.length === 5) {
    //                 rows.push(
    //                     <tr key={i} id={i}>
    //                         {cols}
    //                     </tr>,
    //                 );
    //                 cols = [];
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < chamipons.length; i++) {
    //             if (chamipons[i].championName.includes(championName)) {
    //                 cols.push(
    //                     <td
    //                         key={chamipons[i].championId}
    //                         id={chamipons[i].championId}>
    //                         <ChampionElement
    //                             imageUrl={chamipons[i].imageLink}
    //                             name={chamipons[i].championName}
    //                             id={chamipons[i].championId}
    //                             onClick={onClick}
    //                         />
    //                     </td>,
    //                 );
    //                 if (cols.length === 5) {
    //                     rows.push(
    //                         <tr key={i} id={i}>
    //                             {cols}
    //                         </tr>,
    //                     );
    //                     cols = [];
    //                 }
    //             }
    //         }
    //     }
    //     if (rows.length === 0) {
    //         rows.push(<tr>{cols}</tr>);
    //     }

    //     setChampionList(rows);
    // }, [chamipons, championName]);

    return (
        <div>
            <table>
                <tbody>
                       <td
                            key="1"
                            id="1">
                            <ChampionElement
                                imageUrl="https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/Annie.png"
                                name="애니"
                                id="1"
                                onClick={onClick}
                            />
                        </td>
                        <td>               
                            <ChampionElement
                                imageUrl=" https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/Lillia.png"
                                name="릴리아"
                                id="2"
                                onClick={onClick}
                            />
                        </td>
                        <td>
                            <ChampionElement
                                imageUrl="https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/Gwen.png"
                                name="그웬"
                                id="3"
                                onClick={onClick}
                            />
                        </td>
                </tbody>
            </table>
        </div>
    );
};

export default ChampionList;
