let scenario = ["Create branch", "Develop", "Commit" , "Deploy"];

function execute(){

    // document.getElementById("svn").innerHTML += "SVN";
    // document.getElementById("git").innerHTML += "GIT";

    const svnStrategy = new SVNStategy();
    const gitStrategy = new GitStategy();

    scenario.forEach(step => {

        svnStrategy.print(step);
        gitStrategy.print(step);
        
    });
}

function printToDiv(target, text){
    
    document.getElementById(target).innerHTML += "<br>" + text;

}


class SVNStategy {

    create(){

    }

    createRelease(){

    }

    createBranch(){

    }

    createTag(){

    }

    startDevelopment(){

    }

    develop(){

    }

    endDevelopment(){

    }

    commit(){

    }

    merge(){

    }

    mergeConflict(){

    }

    deploy(){

    }



    print(visual){
        printToDiv("svn", visual);
    }
}

class GitStategy {

    print(visual){
        printToDiv("git", visual);
    }
    
}
