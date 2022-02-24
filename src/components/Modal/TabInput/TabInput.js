import React,{ useState, useEffect} from 'react'
import {Input, DatePicker, Select, Button} from "antd"
import {useSelector, useDispatch} from "react-redux";
import {DeleteOutlined} from "@ant-design/icons"
import {setValues} from '../../../redux/stored_reducer';
import UploadFile from "../../Modal/UpLoadFile"
import {STRING, DATE, UPLOAD, SELECT, BUTTON} from '../InputTypes'
import {Option} from "antd/lib/mentions";
import "./TabInput.scss"

const TabInput = ({record, name, type, tabName, options, filePath}) => {
    const {values} = useSelector(state => state?.tabs_reducer);
    const { allData } = useSelector(state => state?.unsaved_reducer);

    // console.log(allData);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     handleChange()
    // },[tabName])

    function handleChange(e) {
        console.log(tabName);
        const foundObj = values?.[tabName].find(d => d?.rowId == record?.rowId);
        const newObj = {...foundObj, [name]: e};
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

        const tabnameValues = values?.[tabName]
        const newTabs = tabnameValues.filter(d => d.rowId !== foundObj.rowId)

        // console.log(foundObj);
        // console.log(tabnameValues);
        // console.log(newTabs);

        // dispatch(setValues({
        //     ...values,
        //     [tabName]: [...newTabs]
        // }));


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
                            // console.log(e);
                        }
                        }>
                        {allData && allData[options]?.map((option, i) => (
                            <Option value={option.id} key={option.id}>
                                {option.name}
                            </Option>
                        ))}
                    </Select>
                </div>
            );
            break;
        case DATE:
            input = (
                <DatePicker
                    format="DD/MM/YYYY"
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
                    label="Upload"
                    filePath={filePath}
                    name={name}
                    onChange={(e) => handleChange(e)}
                />
            );
            break;

        case BUTTON:
            input = (
                <Button type='default' onClick={() => handleDelete()}><DeleteOutlined/></Button>
            )

        default:
            break;
    }

    return input;

}

export default TabInput;