import ApproverType = require('../../constant/ApproverType');
import AbstractApprover = require('./AbstractApprover');
import LoanRequest = require('../Loan/LoanRequest');
import LoanApprovalSummary = require('../Loan/LoanApprovalSummary');

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

export = BranchManager;
