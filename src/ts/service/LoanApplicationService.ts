import ApproverType = require('../constant/ApproverType');
import AbstractApprover = require('../entity/Approver/AbstractApprover');
import LoanRequest = require('../entity/Loan/LoanRequest');
import LoanApprovalSummary = require('../entity/Loan/LoanApprovalSummary');
import Agent = require('../entity/Approver/Agent');
import LineManager = require('../entity/Approver/LineManager');
import BranchManager = require('../entity/Approver/BranchManager');

class LoanApplicationService {
    private _firstApprover:AbstractApprover;

    constructor() {
        this.registerApprovers();
    }

    public processLoanRequest(value:number):LoanApprovalSummary {
        var loanRequest = new LoanRequest(value);

        return this.firstApprover.handle(loanRequest);
    }

    public registerApprovers() {
        /* Define approvers. */
        var agent = new Agent();
        var lineManager = new LineManager();
        var branchManager = new BranchManager();

        /* Define chain. */
        agent.nextInChain = lineManager;
        lineManager.nextInChain = branchManager;

        /* Set first approver. */
        this.firstApprover = agent;
    }

    public get firstApprover():AbstractApprover {
        return this._firstApprover;
    }

    public set firstApprover(value:AbstractApprover) {
        this._firstApprover = value;
    }
}

export = LoanApplicationService;
