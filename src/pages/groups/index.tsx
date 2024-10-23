import { useEffect, useState } from "react";
import { Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupModal from "../../components/GroupModal";
import { httpRequest } from "../../config/axios";
import GroupList from "../../components/GroupList";
import "./style.css";

export type Group = {
    id: number;
    name: string;
    users: Member[]
}

export type Member = {
    id: number;
    name: string;
};

const Groups = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [groupName, setGroupName] = useState('')
    const [groups, setGroups] = useState<Group[]>([])
    const [groupUpdated, setGroupUpdated] = useState(false);


    useEffect(() => {
        fetchGroup();
    }, [groupUpdated]);

    const fetchGroup = async () => {
        const response = await httpRequest.get('http://localhost:8080/groups');
        setGroups(response.data)
    }
    const handleDelete = async (groupId: number) => {
        try {
            await httpRequest.delete(`http://localhost:8080/groups/${groupId}`);
            setGroupUpdated(prev => !prev);
        } catch (error) {
            console.error('Error deleting group:', error);
        }

    }
    const handleAddGroup = async (selectedMembers: Member[]) => {
        try {
            const userIds = selectedMembers.map(member => member.id);
            const response = await httpRequest.post('http://localhost:8080/groups', {
                groupName: groupName,
                userId: userIds,
            });
            setIsModalOpen(false);
            console.log(response)
            setGroupUpdated(prev => !prev);
        } catch (error) {
            console.error('Error creating group:', error);
        }
    };

    return (
        <>
            <div className="container-sm relative h-full">
                {groups.length > 0 ? <GroupList groups={groups} handleDelete={handleDelete} /> :
                    <div className="h-full flex items-center">
                        <div className="text-center">
                            <Empty
                                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                description={<h1 className="text-white">No Groups Created Yet</h1>}
                            />
                            <p>Add a group by tapping on the "+" to start organizing your groups</p>
                        </div>
                    </div>
                }

                <div onClick={() => setIsModalOpen(!isModalOpen)} className="floating_button flex items-center justify-center">
                    <PlusOutlined />
                </div>
                <GroupModal
                    isModalOpen={isModalOpen}
                    handleOk={handleAddGroup}
                    handleCancel={() => setIsModalOpen(false)}
                    groupName={groupName}
                    setGroupName={setGroupName}
                    availableMembers={[ // will be replace with real users
                        { id: 1, name: 'John Doe' },
                        { id: 2, name: 'Jane Smith' },
                    ]}
                />
            </div>
        </>
    );
};

export default Groups;