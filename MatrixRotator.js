/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
}

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  var newMatrix = [];
  if (direction == Direction.CCW) {
    for (var i = 0; i < this.matrix.length; i++){
      var newArr = [];
      for (var k = 0; k < this.matrix[i].length; k++){
        newArr.push(this.matrix[k][i]);
      }
      newMatrix.unshift(newArr);
    }
  }

  if (direction == Direction.CW){
    for (var i = 0; i < this.matrix.length; i++) {
      var newArr = [];
      for (var k = 0; k < this.matrix[i].length; k++){
        newArr.unshift(this.matrix[k][i]);
      }
      newMatrix.push(newArr);
    }
  }

  this.matrix = newMatrix;

  // must be a valid Direction, see Direction.js


};