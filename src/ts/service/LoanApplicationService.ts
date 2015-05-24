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
