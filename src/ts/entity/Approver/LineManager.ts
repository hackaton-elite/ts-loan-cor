class LineManager extends AbstractApprover {
    public static THRESHOLD = 10000;

    constructor() {
        super(ApproverType.LINE_MANAGER, LineManager.THRESHOLD);
    }
}
