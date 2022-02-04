import _ from "lodash";
import moment from "moment";

export default (filters, columns, data) => {
    let filteredCols = [...columns];
    filters.forEach(d => {
        filteredCols = filteredCols.map(a => {
            if (a.dataIndex == d.dataIndex) {
                let filtereds = _.uniqBy(data, e => e[d.dataIndex]).map(k => {
                    if (d.dataIndex === "time_create") {
                        return {
                            text: moment(k[d.dataIndex]).format("DD.MM.YYYY") || "",
                            value: moment(k[d.dataIndex]).format("DD.MM.YYYY") || "",
                        };
                    } else {
                        return {
                            text: k[d.dataIndex], value: k[d.dataIndex],
                        };
                    }
                });
                return {
                    ...a, filters: filtereds,
                };
            } else {
                return a;
            }
        });
    });

    return filteredCols;
};