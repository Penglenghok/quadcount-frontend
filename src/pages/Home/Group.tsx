import { Empty } from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import GroupList from "../../components/GroupList";
import GroupModal from "../../components/GroupModal";
import { httpRequest } from "../../config/axios";
import { IGroup } from "../../types/group.type";


export type Member = {
  id: number;
  name: string;
  email: string
};

const Group = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [groupUpdated, setGroupUpdated] = useState(false);
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    fetchGroup();
    fetchUsers();
  }, [groupUpdated]);

  const fetchUsers = async () => {
    const response = await httpRequest.get(`users`);
    console.log(response.data)
    setMembers(response.data)
  }
  const fetchGroup = async () => {
    const response = await httpRequest.get(`groups`);
    setGroups(response.data);
  };

  const handleDelete = async (groupId: number) => {
    try {
      await httpRequest.delete(`groups/${groupId}`);
      setGroupUpdated(prev => !prev);
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  };

  const handleAddGroup = async (selectedMembers: Member[]) => {
    try {
      const userIds = selectedMembers.map(member => member.id);
      const response = await httpRequest.post('groups', {
        name: groupName,
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
      <div className="container-sm relative h-full flex flex-col items-center justify-center">
        {groups.length > 0 ? (
          <GroupList groups={groups} handleDelete={handleDelete} />
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              description={<h1 className="text-white">No Groups Created Yet</h1>}
            />
            <p className="text-center">Add a group by tapping on the "+" to start organizing your groups</p>
          </div>
        )}
        <div
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="floating_button flex items-center justify-center mt-4"
        >
          <PlusOutlined />
        </div>
        <GroupModal
          isModalOpen={isModalOpen}
          handleOk={handleAddGroup}
          handleCancel={() => setIsModalOpen(false)}
          groupName={groupName}
          setGroupName={setGroupName}
          availableMembers={members}
        />
      </div>
    </>
  );
}

export default Group;