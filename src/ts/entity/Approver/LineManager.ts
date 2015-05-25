import ApproverType = require('../../constant/ApproverType');
import AbstractApprover = require('./AbstractApprover');

class LineManager extends AbstractApprover {
    public static THRESHOLD = 10000;

    constructor() {
        super(ApproverType.LINE_MANAGER, LineManager.THRESHOLD);
    }
}

export = LineManager;
