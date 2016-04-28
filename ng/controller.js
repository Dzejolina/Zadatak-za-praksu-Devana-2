var ngApp = angular.module('devana-app',[]);

ngApp.controller('appController', function ($scope) {

    var counter=1;

    $scope.folders = [
        {
            "id": 0,
            "title": "root",
            "stage": 0
        }
    ];

    $scope.files = [];

    $scope.folder_stage = 0;

    $scope.folder_id = 0;

    //Dodavanje foldera
    $scope.addFolder = function (folder_stage, folder_title) {
        var stage = parseInt(folder_stage)+1;
        var folder = {id: counter, stage: stage,  title: folder_title};
        $scope.folders.push(folder);
        counter++;
    };
    //formFolder toggle
    $(document).ready(function() {
        $(".toggleFolder").click(function(e) {
        $(".hiddenFolder").addClass('visible');
        e.preventDefault();
        });
        $(".closeFolder").click(function(e) {
        $('.hiddenFolder').removeClass('visible');
        e.preventDefault();
        });
        $(".saveFolder").click(function(e) {
        $('.hiddenFolder').removeClass('visible');
        e.preventDefault();
        });
    });

    //Dodavanje fajla
    $scope.addFile = function (folder_id, title, file_extension) {
        var file = {id: folder_id, title: title, extension: file_extension};
        $scope.files.push(file);
    };

    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };
    //formFile toggle
    $(document).ready(function() {
        $(".toggleFile").click(function(e) {
        $(".hiddenFile").addClass('visible');
        e.preventDefault();
        });
        $(".closeFile").click(function(e) {
        $('.hiddenFile').removeClass('visible');
        e.preventDefault();
        });
        $(".saveFile").click(function(e) {
        $('.hiddenFile').removeClass('visible');
        e.preventDefault();
        });
    });

    //Brisanje foldera
    $scope.deleteFolder = function(folder) {
        var index = $scope.folders.indexOf(folder);
        $scope.folders.splice([1], 1);
    };

    //Brisanje fajla
    $scope.deleteFile = function(file) {
        var index = $scope.files.indexOf(file);
        $scope.files.splice(index, 1);
    };

    $scope.order = 'title';


    //Editovanje foldera
        
    $scope.editFolder = function(folder){
        if( folder.id > 0 ) {
        folder.editing = true;
    }
        else{
            folder.editing = false;
        }
    }
        
    $scope.doneEditing = function(folder){
        folder.editing=false;

    }
    
    //Editovanje file-a

    $scope.editFile = function(file){
        file.editing=true;
    }
        
    $scope.doneEdit = function(file){
        file.editing=false;

    }
  
});