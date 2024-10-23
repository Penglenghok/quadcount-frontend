import { useEffect, useState } from "react";
import "./style.css";
import { Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupModal from "../../components/GroupModal";

type Group = {
    id: number;
    name: string;
}

export type Member = {
    id: string;
    name: string;
};

const Groups = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [groupName, setGroupName] = useState('')

    useEffect(() => {
    }, []);

    const handleAddGroup = (selectedMembers: Member[]) => {
        console.log(selectedMembers)
        console.log(groupName)
    };

    return (
        <>
            <div className="container-sm relative h-full">
                <div className="h-full flex items-center">
                    <div className="text-center">
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            description={<h1 className="text-white">No Groups Created Yet</h1>}
                        />
                        <p>Add a group by tapping on the "+" to start organizing your groups</p>
                    </div>
                </div>
                <div onClick={() => setIsModalOpen(!isModalOpen)} className="floating_button flex items-center justify-center">
                    <PlusOutlined />
                </div>
                <GroupModal
                    isModalOpen={isModalOpen}
                    handleOk={handleAddGroup}
                    handleCancel={() => setIsModalOpen(false)}
                    setGroupName={setGroupName}
                    availableMembers={[ // will be replace with real users
                        { id: '1', name: 'John Doe' },
                        { id: '2', name: 'Jane Smith' },
                    ]}
                />
            </div>
        </>
    );
};

export default Groups;
