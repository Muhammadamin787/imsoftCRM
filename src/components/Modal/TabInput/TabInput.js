import React, { useState, useEffect } from 'react'
import { Input, DatePicker, Select, Button } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons"
import { setValues } from '../../../redux/stored_reducer';
import UploadFile from "../../Modal/UpLoadFile"
import { STRING, DATE, UPLOAD, SELECT, BUTTON } from '../InputTypes'
import { Option } from "antd/lib/mentions";
import "./TabInput.scss"

const TabInput = ({ record, name, type, tabName, options, filePath }) => {
    const { values } = useSelector(state => state?.tabs_reducer);
    const { allData } = useSelector(state => state?.unsaved_reducer);


    const dispatch = useDispatch();

    function handleChange(e) {
        const foundObj = values?.[tabName].find(d => d?.rowId == record?.rowId);
        const newObj = { ...foundObj, [name]: e };
        let foundTab = [...values?.[tabName]];
        foundTab.splice(foundTab.indexOf(foundObj), 1)
        foundTab.push(newObj);

        dispatch(setValues({
            ...values,
            [tabName]: [...foundTab]
        }));
    }

    const handleDelete = () => {

        const foundObj = values?.[tabName].find(d => d?.rowId == record?.rowId);
        let foundTab = [...values?.[tabName]];
        foundTab.splice(foundTab.indexOf(foundObj), 1)

        dispatch(setValues({
            ...values,
            [tabName]: [...foundTab]
        }));

    }

    let input = null;

    switch (type) {
        case STRING:
            input = (
                <Input
                    name={name}
                    // value={values && values[name]}
                    onChange={(e) => handleChange(e.target.value)}
                />
            );
            break;
        case SELECT:
            input = (
                <div className="tab-select__option">
                    <Select
                        size="small"
                        name={name}
                        onChange={(e) => {
                            handleChange(e);
                        }
                        }>
                        {allData && allData[options]?.map((option, i) => (
                            <Option value={option?.id} key={option?.id}>
                                {option?.name}
                            </Option>
                        ))}
                    </Select>
                </div>
            );
            break;
        case DATE:
            input = (
                <DatePicker
                    // format="DD/MM/YYYY"
                    allowClear={false}
                    onChange={(_, dateString) => {

                        handleChange(dateString);
                    }}
                />
            );
            break;
        case UPLOAD:

            input = (
                <UploadFile
                    id="file-uploder"
                    filePath={filePath}
                    name={name}
                    onChange={(e) => handleChange(e)}
                    Iconic="UploadFileOilasi"
                />
            );
            break;

        case BUTTON:
            input = (
                <Button type='default' onClick={() => handleDelete()}><DeleteOutlined /></Button>
            )

        default:
            break;
    }

    return input;

}

export default TabInput;