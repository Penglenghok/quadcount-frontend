import { Button } from "antd"
import { Group } from "../pages/groups"

type Props = {
    groups: Group[]
    handleDelete: (groupId: number) => void
}

const GroupList = (props: Props) => {
    const { groups, handleDelete } = props
    return (
        <div className='groups_list-wrapper'>
            <h3 className='mb-0'>Groups:</h3>
            {
                groups.map((group) => (
                    <div className='groups_list-item' key={group.id}>
                        <div className='group_detail'>
                            <div className='group_title'>{group.name}</div>
                        </div>
                        <Button type="link" danger onClick={() => handleDelete(group.id)} >
                            Remove
                        </Button>
                    </div>
                ))
            }
        </div>
    )
}

export default GroupList