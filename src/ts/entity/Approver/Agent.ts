import ApproverType = require('../../constant/ApproverType');
import AbstractApprover = require('./AbstractApprover');

class Agent extends AbstractApprover {
    public static THRESHOLD = 1000;

    constructor() {
        super(ApproverType.AGENT, Agent.THRESHOLD);
    }
}

export = Agent;
