class BranchManager extends AbstractApprover {
    public static THRESHOLD = 50000;

    constructor() {
        super(ApproverType.BRANCH_MANAGER, BranchManager.THRESHOLD);
    }

    public handle(loanRequest:LoanRequest):LoanApprovalSummary {
        if (loanRequest.value < this.threshold) {
            return this.approveLoan();
        }

        return this.rejectLoan();
    }
}
