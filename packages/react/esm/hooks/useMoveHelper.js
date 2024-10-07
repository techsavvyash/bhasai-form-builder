import { useOperation } from './useOperation';
export const useMoveHelper = (workspaceId) => {
    const operation = useOperation(workspaceId);
    return operation?.moveHelper;
};
