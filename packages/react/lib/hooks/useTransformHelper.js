import { useOperation } from './useOperation';
export const useTransformHelper = (workspaceId) => {
    const operation = useOperation(workspaceId);
    return operation?.transformHelper;
};
