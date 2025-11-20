from flask import Blueprint, jsonify
main_bp = Blueprint('main', __name__)

@main_bp.route('/status', methods=['GET'])
def status():
    """
    Returns the status of the service
    """
    return jsonify({'status': 'running'})
