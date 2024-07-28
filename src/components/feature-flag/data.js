

const dummyAPIResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true,
    showTabs: true,
}

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500)
        else reject('Some error occurred! Please try again later')

    })
}

export default featureFlagsDataServiceCall;

