const Poll = require('../models/poll-model')

createPoll = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a poll',
        })
    }

    const poll = new Poll({
        name: body.name,
        dates: body.dates
    })

    if (!poll) {
        return res.status(400).json({ success: false, error: err })
    }

    poll
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: poll._id,
                message: 'Poll created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Poll not created!',
            })
        })
}

updatePoll = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Poll.findOne({ _id: req.params.id }, (err, poll) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Poll not found!',
            })
        }
        poll.name = body.name
        poll.time = body.time
        poll.rating = body.rating
        poll
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: poll._id,
                    message: 'Poll updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Poll not updated!',
                })
            })
    })
}

deletePoll = async (req, res) => {
    await Poll.findOneAndDelete({ _id: req.params.id }, (err, poll) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!poll) {
            return res
                .status(404)
                .json({ success: false, error: `Poll not found` })
        }

        return res.status(200).json({ success: true, data: poll })
    }).catch(err => console.log(err))
}

getPollById = async (req, res) => {
    await Poll.findOne({ _id: req.params.id }, (err, poll) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!poll) {
            return res
                .status(404)
                .json({ success: false, error: `Poll not found` })
        }
        return res.status(200).json({ success: true, data: poll })
    }).catch(err => console.log(err))
}

getPolls = async (req, res) => {
    await Poll.find({}, (err, polls) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!polls.length) {
            return res
                .status(404)
                .json({ success: false, error: `Poll not found` })
        }
        return res.status(200).json({ success: true, data: polls })
    }).catch(err => console.log(err))
}

module.exports = {
    createPoll,
    updatePoll,
    deletePoll,
    getPolls,
    getPollById,
}
